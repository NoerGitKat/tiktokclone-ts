import { NextPage } from 'next';
import { footerList1, footerList2, footerList3 } from '../../../utils/constants';

const FooterList = ({ items, mt }: { items: string[]; mt: boolean }) => (
  <div className={`flex flex-wrap gap-2 ${mt && 'mt-5'}`}>
    {items.map((item: string) => (
      <p key={item} className="text-gray-400 text-sm  hover:underline cursor-pointer">
        {item}
      </p>
    ))}
  </div>
);

const Footer: NextPage = () => {
  const lists = [footerList1, footerList2, footerList3];
  return (
    <footer className="mt-6 hidden xl:block">
      {lists.map((list, index) => (
        <FooterList key={`List${index}`} items={list} mt={index !== 0} />
      ))}
      <h4 className="text-gray-400 text-sm mt-5">© 2022 TikTokClone</h4>
    </footer>
  );
};

export default Footer;
