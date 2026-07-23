import ButtonLink from "../buttons/ButtonLink";

type Props = {
  text: string;
  link: string;
};

const MenuLink = ({ text, link }: Props) => {
  return (
    <li className=" ">
      <ButtonLink
        message={text}
        link={link}
        className="!text-sm relative
    after:absolute
    after:left-0
    after:-bottom-1
    after:h-[1px]
    after:w-0
    after:bg-font-dark
    after:transition-all
    after:duration-300
    hover:after:w-full"
      />
    </li>
  );
};

export default MenuLink;
