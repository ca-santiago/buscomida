import extraMapper from "../../../mappers/extra";
import { ExtraDTO } from "../../../mappers/types";
import { extraService } from "../../../services";

interface GetExtraListResult {
  data: ExtraDTO[];
  page: number;
  count: number;
  pageCount: number;
}

const getExtraList = async (
  page = 1,
  count = 10
): Promise<GetExtraListResult> => {
  const _page = Math.max(1, page);
  const _count = Math.max(10, Math.min(count, 50));
  const { data, pageCount } = await extraService.getCount(
    (_page - 1) * _count,
    _count
  );
  return {
    data: data.map(extraMapper.DAOToDTO),
    page: _page,
    count: _count,
    pageCount,
  };
};

export default getExtraList;
