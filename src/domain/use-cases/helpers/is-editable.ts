import { BadResourceUpdateValues, StandardError } from "../../errors";
import { ItemStatus, ItemStatusEnum, ItemStatusKeys } from "../../models/types";

interface ObjectWithStatus {
  status: ItemStatus;
}

export const isContentEditable = ({ status }: ObjectWithStatus): boolean => {
  return Array.from<ItemStatus>(["DRAFT", "DISABLED"]).includes(status);
};

// TODO: Set timestamp of the last status update?
// So we can validate that you can't update product status after some minutes, so users do not get confuse
export const isStatusEditableTo = (
  { status }: ObjectWithStatus,
  newStatus: ItemStatus
): StandardError | null => {
  let error: StandardError | null = null;

  if (status === "DRAFT" && newStatus === "ACTIVE") error = null;

  if (status === "DISCONTINUED") {
    error = new BadResourceUpdateValues("Cannot update discontinued items");
  } else if (newStatus === "DRAFT") {
    error = new BadResourceUpdateValues("Cannot set items to draft");
  }

  return error;
};

/**
 * Since all update status operations are one to one, a replace action, we can build a operation set like: ["DRAFT", "ACTIVE"]
 * to verify if the current operation is valid, because it exist on the record of valid status transitinos. link object: 2
 *
 * We can also generate a dictionary to hold those values, like: object 1
 */

type KeyofItemStatus = keyof typeof ItemStatusEnum;
const object1: Record<
  KeyofItemStatus,
  Partial<Record<KeyofItemStatus | "ANY", StandardError | null>>
> = {
  // To status
  ACTIVE: {
    // From status
    DRAFT: new BadResourceUpdateValues("Cannot set items to draft"),
    ANY: new BadResourceUpdateValues("Cannot update discontinued items"),
  },
  DISABLED: {
    ACTIVE: null,
  },
  DISCONTINUED: {},
  DRAFT: {
    ANY: new BadResourceUpdateValues("Cannot set items to draft"),
  },
};

type StatusUpdateActions = Array<[KeyofItemStatus, KeyofItemStatus]>;

const object2: StatusUpdateActions = [
  ["ACTIVE", "DRAFT"],
  ["DISABLED", "DRAFT"],
];
