type Props = {};

const RecruitExplain = (props: Props) => {
  return (
    <div className="flex w-full pt-8 lg:w-[55%] lg:pt-5">
      <div className="text-[15px]">
        <div>
          <h2 className="font-bold">現在募集している職種は以下となります。</h2>
          <p>1. 経理事務スタッフ</p>
        </div>
        {/* （１）業務の内容について============================================= */}
        <div className="pt-5">
          <h2 className="font-bold">（１）業務の内容について</h2>
          {/* 第1セクション--------------------------------------- */}
          <div className="pt-1">
            <h3 className="text-sm">＜定常業務＞</h3>
            <p className="text-sm leading-6">
              支払い、請求、債権債務管理、固定資産管理、資金管理、月次決算、会計システム管理（勘定奉行）、アウトソース先との連携、社内部署・外部との調整及び対応等
            </p>
          </div>
          {/* 第2セクション--------------------------------------- */}
          <div className="pt-5">
            <h3 className="text-sm">＜決算実務全般＞</h3>
            <p className="text-sm leading-6">
              引当金等決算会計処理、会社法関連書類作成、連結報告、税金計算、申告・納税等
            </p>
          </div>
        </div>
        {/* （２）求める人材================================================================== */}
        <div className="pt-7">
          <span className="font-bold">（２）応募資格</span>
          <p className="text-sm leading-6">
            ・会計、税務知識 （IFRS・国内/国際課税知識）
            <br />
            ・簿記２級以上
            <br />
            ・財務経理、税務申告・納税など経理財務実務の一巡を理解経験している事（実務経験５年以上）
            <br />
            ・マイクロソフトオフィスツール
            <br />
            （エクセル、ワード、パワーポイント、アウトルック等中級以上のスキル）
            <br />
            <br />
            【尚可】 ・勘定奉行使用経験
          </p>
        </div>
      </div>
    </div>
  );
};

export default RecruitExplain;
