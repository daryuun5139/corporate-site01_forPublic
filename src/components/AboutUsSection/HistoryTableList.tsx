import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

const HistoryTableList = (props: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="h-fit w-[100px] py-0 text-sm sm:w-[120px] sm:text-base md:w-[150px]">
            年月日
          </TableHead>
          <TableHead className="h-fit py-0 text-left text-sm sm:text-base md:w-[250px]">
            沿革
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="py-2 sm:text-lg md:py-2 ">1971年4月</TableCell>
          <TableCell className="py-2 sm:text-lg md:py-2">山田太郎会計事務所を設立。</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 sm:text-lg md:py-2">1971年4月</TableCell>
          <TableCell className="py-2 sm:text-lg md:py-2">山田太郎会計事務所を設立。</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 sm:text-lg md:py-2">1971年4月</TableCell>
          <TableCell className="py-2 sm:text-lg md:py-2">山田太郎会計事務所を設立。</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 sm:text-lg md:py-2">1971年4月</TableCell>
          <TableCell className="py-2 sm:text-lg md:py-2">山田太郎会計事務所を設立。</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 sm:text-lg md:py-2">1971年4月</TableCell>
          <TableCell className="py-2 sm:text-lg md:py-2">山田太郎会計事務所を設立。</TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="py-2 sm:text-lg md:py-2">1971年4月</TableCell>
          <TableCell className="py-2 sm:text-lg md:py-2">山田太郎会計事務所を設立。</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default HistoryTableList;
