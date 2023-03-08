import { ReactNode } from 'react';
import Link from 'next/link';

import SidebarMenu from '@/documentation/data/SidebarMenu';
import styles from '@/documentation/assets/styles/Documentation.module.scss';

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Props) => {
  const { menus } = SidebarMenu();

  return (
    <div className={`${styles.wrapper}`}>
      <div className={`${styles.header}`}>
        <div>
          <div>H</div>
          <nav>
            <ul>
              <li>
                <Link href={{}}>Home</Link>
              </li>
              <li>
                <Link href={{}}>about</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div>social media</div>
      </div>
      <section className={`${styles.content}`}>
        <div>
          <span className="text-xl">UI - Component</span>
          <ul>
            {menus.map((menu) => (
              <li key={menu.id}>
                <Link href={{}}>{menu.name}</Link>
                {menu.subMenu.length > 0 && (
                  <ul>
                    {menu.subMenu.map((subMenu) => (
                      <li key={subMenu.id}>{subMenu.name}</li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div>
            {children}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Template;
