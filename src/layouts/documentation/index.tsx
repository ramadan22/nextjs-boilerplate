import { ReactNode } from 'react';
import Link from 'next/link';
import styles from '@/assets/styles/Documentation.module.scss';

interface Props {
  children: ReactNode;
}

const Template = ({ children }: Props) => (
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
          <li>
            <Link href={{}}>Button</Link>
            <ul>
              <li><Link href={{}}>Default</Link></li>
              <li><Link href={{}}>Button Icon</Link></li>
            </ul>
          </li>
          <li>
            <Link href={{}}>Icon</Link>
          </li>
          <li>
            <Link href={{}}>Input</Link>
            <ul>
              <li><Link href={{}}>Default</Link></li>
              <li><Link href={{}}>Input Icon</Link></li>
            </ul>
          </li>
          <li>
            <Link href={{}}>Checkbox</Link>
          </li>
          <li>
            <Link href={{}}>Radio</Link>
          </li>
        </ul>
      </div>
      <div>
        {children}
      </div>
    </section>
  </div>
);

export default Template;
