import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import Template from '@/layouts/documentation';
import { Button } from '@/components/button';

const DocumentationPage = () => {
  const codeString = `
  // Button Variant
  <div className="flex flex-row gap-x-4">
    <Button text="Primary" variant="secondary" />
    <Button text="Secondary" variant="secondary" />
    <Button text="Tertiary" variant="tertiary" />
  </div>

  // Button Size
  <div className="flex flex-row gap-x-4">
    <Button text="Primary" size="small" />
    <Button text="Secondary" size="medium" />
    <Button text="Tertiary" size="large" />
  </div>
  `;

  return (
    <Template>
      <h1 className="text-3xl font-bold my-3">Button Default</h1>
      <hr />
      <div className="flex flex-col gap-y-5 py-10">
        <div>
          <h1 className="text-xl font-bold my-3">Button Variant</h1>
          <div className="flex flex-row gap-x-4">
            <Button text="Primary" variant="primary" />
            <Button text="Secondary" variant="secondary" />
            <Button text="Tertiary" variant="tertiary" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Button Size</h1>
          <div className="flex flex-row gap-x-4">
            <Button text="Primary" size="small" />
            <Button text="Secondary" size="medium" />
            <Button text="Tertiary" size="large" />
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Code</h1>
          <SyntaxHighlighter language="vbscript-html" style={docco}>
            {codeString}
          </SyntaxHighlighter>
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Playground</h1>
          <div className="flex py-5">
            <form className="flex flex-col gap-y-4">
              <div className="flex gap-x-4 justify-between">
                <span>Text</span>
                <input className="border border-solid border-gray-300 rounded" />
              </div>
              <div className="flex gap-x-4 justify-between">
                <span>Variants</span>
                <input className="border border-solid border-gray-300 rounded" />
              </div>
              <div className="flex gap-x-4 justify-between">
                <span>Size</span>
                <input className="border border-solid border-gray-300 rounded" />
              </div>
            </form>
            <div className="flex-1 flex justify-center items-center">
              test
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default DocumentationPage;
