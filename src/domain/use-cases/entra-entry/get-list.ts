import extraEntryMapper from "../../../mappers/extra-entry";
import { ExtraEntryDTO } from "../../../mappers/types";
import { extraEntryService } from "../../../services";

interface GetExtraEntryListResult {
  data: ExtraEntryDTO[];
  page: number;
  count: number;
  pageCount: number;
}

const getExtraList = async (
  page = 1,
  count = 10
): Promise<GetExtraEntryListResult> => {
  const _page = Math.max(1, page);
  const _count = Math.max(10, Math.min(count, 50));
  const { data, pageCount } = await extraEntryService.getCount(
    (_page - 1) * _count,
    _count
  );
  return {
    data: data.map(extraEntryMapper.DAOToDTO),
    page: _page,
    count: _count,
    pageCount,
  };
};

export default getExtraList;
