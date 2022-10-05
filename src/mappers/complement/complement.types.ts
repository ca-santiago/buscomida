export interface GroupComplementOptionDAO {
    id: string;
    title: string;
    description: string;
    createAt: string;
    status: string;
}

export interface ComplementDAO {
    id: string;
    title: string;
    description: string;
    createAt: string;
    status: string;
}

export interface GroupComplement extends ComplementDAO {
    options: GroupComplementOptionDAO[];
}
