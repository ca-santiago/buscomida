import extraSectionMapper from "../../../mappers/extra-section";
import { ExtraSectionDTO } from "../../../mappers/types";
import { extraSectionService } from "../../../services";

interface GetExtraSectionListResult {
  data: ExtraSectionDTO[];
  page: number;
  count: number;
  pageCount: number;
}

const getExtraSectionList = async (
  page = 1,
  count = 10
): Promise<GetExtraSectionListResult> => {
  const _page = Math.max(1, page);
  const _count = Math.max(10, Math.min(count, 50));
  const { data, pageCount } = await extraSectionService.getCount(
    (_page - 1) * _count,
    _count
  );
  return {
    data: data.map(extraSectionMapper.DAOToDTO),
    page: _page,
    count: _count,
    pageCount,
  };
};

export default getExtraSectionList;
