import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import variants from '@/data/variants.json';

import usePlayground from './hooks/usePlayground';

import Template from '@/layouts/documentation';
import RadioButton from '@/components/radio-button/RadioButton';
import { Button } from '@/components/button';
import { Input } from '@/components/input';

const DocumentationPage = () => {
  const {
    sizes,
    playground,
    inputField,
    buttonField,
  } = usePlayground();

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
          <div className="flex flex-row py-5">
            <form className="w-1/2 flex flex-col gap-y-8">
              <div className="flex">
                <div className="w-[100px]">Text</div>
                <div>
                  <Input name="text" value={playground.text} onChange={inputField} />
                </div>
              </div>
              <div className="flex">
                <div className="w-[100px]">Variants</div>
                <div className="flex flex-col gap-y-2">
                  {variants.map((item) => (
                    <div key={item.id}>
                      <RadioButton
                        name="variant"
                        text={item.text}
                        value={item.value}
                        onClick={buttonField}
                        checked={item.value === playground.variant}
                      />
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex">
                <div className="w-[100px]">Size</div>
                <div className="flex flex-col gap-y-2">
                  {sizes.map((item) => (
                    <div key={item.id}>
                      <RadioButton
                        name="size"
                        text={item.text}
                        value={item.value}
                        onClick={buttonField}
                        checked={item.value === playground.size}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </form>
            <div className="w-1/2 flex-1 flex justify-center items-center">
              <Button
                size={playground.size}
                variant={playground.variant}
                text={playground.text || 'Button'}
              />
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default DocumentationPage;
