import { ItemStatus } from "../models/types";

type WithStatus = { status: ItemStatus };

const publishItem = <T extends WithStatus>(item: T): T => {
  return { ...item, status: "ACTIVE" };
};

const disableItem = <T extends WithStatus>(item: T): T => {
  return { ...item, status: "DISABLED" };
};

export const buildStatusManager = <T extends WithStatus>() => {
  return {
    publish: publishItem,
    disable: disableItem,
  };
};

const statusDispacher = () => {};
