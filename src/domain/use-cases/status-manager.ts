import { BadResourceUpdateValues } from "../errors";
import { ItemStatus, ItemStatusEnum } from "../models/types";
import { isStatusEditableTo } from "./helpers/is-editable";

type WithStatus = { status: ItemStatus };

const publishItem = <T extends WithStatus>(item: T): T => {
  return { ...item, status: "ACTIVE" };
};

const disableItem = <T extends WithStatus>(item: T): T => {
  return { ...item, status: "DISABLED" };
};

// TODO: Q - Raise event message of product status updated?
// So users that have this product on its cart get notified that its card product was updated and notice the change
export const buildStatusManager = <T extends WithStatus>() => {
  return (status: ItemStatus, item: T): T => {
    if (!(status in ItemStatusEnum)) {
      throw new BadResourceUpdateValues("Provided value is invalid");
    }
    const error = isStatusEditableTo(item, status);
    if (error) {
      throw error;
    }
    switch (status) {
      case "ACTIVE":
        return publishItem(item);
      case "DISABLED":
        return disableItem(item);
      default:
        return item;
    }
  };
};
