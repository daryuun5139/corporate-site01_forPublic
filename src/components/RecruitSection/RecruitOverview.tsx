import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Props = {};

const RecruitOverview = (props: Props) => {
  return (
    <div className="flex w-full lg:w-[38%]">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="h-fit w-[100px] pb-2 text-sm md:h-12 md:py-4">応募概要</TableHead>
            <TableHead className="h-fit py-0 text-left text-sm md:h-12 md:w-[250px] md:py-4"></TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="py-2 md:py-4">給与</TableCell>
            <TableCell className="py-2 md:py-4">300〜500万</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="py-2 md:py-4">勤務地</TableCell>
            <TableCell className="py-2 md:py-4">東京都千代田区丸の内1-1-1</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="py-2 md:py-4">雇用形態</TableCell>
            <TableCell className="py-2 md:py-4">正社員</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="py-2 md:py-4">勤務体系</TableCell>
            <TableCell className="py-2 md:py-4">
              勤務時間
              <br /> AM9:00-PM17:00 <br />
              <br />
              休日・休暇 <br />
              完全週休2日制(土日)、夏季休暇、
              <br />
              年末年始休暇、有給休暇
              <br />
              <br /> 固定残業制について
              <br /> 月20時間を超えたら別途支給
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="py-2 md:py-4">試用期間</TableCell>
            <TableCell className="py-2 md:py-4">あり（3ヶ月）</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="py-2 md:py-4">福利厚生</TableCell>
            <TableCell className="py-2 md:py-4">
              社会保険完備(健康保険、厚生年金保険、雇用保険、労災保険)
              <br />
              その他、産休・育休などの支援制度あり
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default RecruitOverview;
