import { v4 } from "uuid";
import { Complement, GroupComplement, ItemStatus } from "./types";

interface CreateComplementProps {
  title: string;
  description: string;
}

export const createNewComplement = (props: CreateComplementProps): Complement => {
  const { description, title } = props;
  return {
    id: v4(),
    description,
    title,
    status: "DRAFT",
    createAt: Date.now().toString(),
  };
};

export const createNewGroupComplement = (
  props: CreateComplementProps
): GroupComplement => {
  return {
    ...createNewComplement(props),
    options: [],
  };
};
