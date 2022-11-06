import { ItemStatus } from "../models/types";

type WithStatus = { status: ItemStatus };

const publishItem = <T extends WithStatus>(item: T): T => {
  return { ...item, status: "ACTIVE" };
};

const disableItem = <T extends WithStatus>(item: T): T => {
  return { ...item, status: "DISABLED" };
};

export const buildStatusManager = <T extends WithStatus>() => {
  return (status: ItemStatus, item: T): T => {
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
