export const Item = ({
  textBold,
  textNormal,
}: {
  textBold?: string;
  textNormal: string;
}) => {
  return (
    <div className="flex justify-start items-start list-none mb-4">
      <img className="mr-4" src="/bullet.svg" width={30} height={30} alt="" />
      <div>
        <strong>{textBold} </strong>
        {textNormal}
      </div>
    </div>
  );
};
