import ButtonLink from "../buttons/ButtonLink";

type Props = {
  text: string;
  link: string;
};

const MenuLink = ({ text, link }: Props) => {
  return (
    <li className="border border-transparent hover:border-b-font-dark">
      <ButtonLink message={text} link={link} className="!text-sm" />
    </li>
  );
};

export default MenuLink;
