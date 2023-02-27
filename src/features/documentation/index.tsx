import Link from 'next/link';
import styles from '@/assets/styles/Documentation.module.scss';

const DocumentationPage = () => (
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
        <span className="text-sm">UI - Component</span>
        <ul>
          <li>
            <Link href={{}}>Button</Link>
            <div>
              <Link href={{}}>Default</Link>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <h1 className="text-3xl font-bold my-3">Button Component</h1>
        <hr />
      </div>
    </section>
  </div>
);

export default DocumentationPage;
