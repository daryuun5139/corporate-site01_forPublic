import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import Image from "next/image";
import buildingImage01 from "public/sampleImages/access/buildingImage01.jpg";

type Props = {};

const AccessDetail = (props: Props) => {
  return (
    <div className="flex h-full flex-col items-center justify-between pb-2">
      <div className="flex">
        <Table>
          <TableBody>
            <TableRow className="">
              <TableCell className="w-[100px] py-3 sm:w-[120px]">住所</TableCell>
              <TableCell className="py-2 md:py-3">東京都千代田区丸の内1−1−1</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[100px] py-2 md:w-[120px] md:py-3">
                電話
                <br />
                FAX
              </TableCell>
              <TableCell className="py-2 md:py-3">
                03-1234-5678
                <br />
                03-1234-5678
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="w-[100px] py-2 md:w-[120px] md:py-3">
                電車で
                <br />
                お越しの方へ
              </TableCell>
              <TableCell className="py-2 md:py-3">
                東京メトロ丸ノ内線の東京駅より徒歩5分です。
                丸ノ内線の他にも多数の路線が利用可能です。
              </TableCell>
            </TableRow>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </div>
      <div className="hidden h-[300px] w-[300px] pt-3 md:flex">
        <Image src={buildingImage01} width={0} height={0} alt="buildingImage01" />
      </div>
    </div>
  );
};

export default AccessDetail;
