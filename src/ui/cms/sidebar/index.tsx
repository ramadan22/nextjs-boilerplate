import Link from 'next/link';

import Label from '@/components/label';
import { sidebarMenu } from '@/data/sidebarMenu';
import Styles from './style.module.scss';

const SidebarUI = () => (
  <div className={Styles.sidebar}>
    <div>
      <div className={Styles.badge}>B</div>
      <Label>Bid Komputer</Label>
    </div>
    <div>
      {sidebarMenu.map((group) => (
        <div key={group.slug}>
          <Label>{group.text}</Label>
          <ul>
            {group.list.map((menu) => (
              <li key={menu.slug}>
                <Link href={menu.href}>
                  {menu.icon}
                  {menu.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);

export default SidebarUI;
