import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/cjs/styles/hljs';
import variants from '@/data/variants.json';

import usePlayground from './hooks/usePlayground';
import useCode from './hooks/useCode';

import RadioButton from '@/components/radio-button/RadioButton';
import WrapZoom from '@/documentation/layouts/WrapZoom';
import Template from '@/documentation/layouts';
import { Button, ButtonIcon } from '@/components/button';
import { Input } from '@/components/input';
import Icon from '@/components/icon/Icon';

const DocumentationPage = () => {
  const { codeString } = useCode();
  const {
    sizes,
    playground,
    inputField,
    buttonField,
  } = usePlayground();

  return (
    <Template>
      <h1 className="text-3xl font-bold my-3">Button Icon</h1>
      <hr />
      <div className="flex flex-col gap-y-14 py-6">
        <div>
          <h1 className="text-xl font-bold my-3">Variant</h1>
          <div className="flex flex-row gap-x-4">
            <ButtonIcon variant="primary">
              <Icon type="ArrowDown" />
              Primary
            </ButtonIcon>
            <ButtonIcon variant="secondary">
              <Icon type="ArrowDown" />
              Secondary
            </ButtonIcon>
            <ButtonIcon variant="tertiary">
              <Icon type="ArrowDown" />
              Tertiary
            </ButtonIcon>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Size</h1>
          <div className="flex flex-row gap-x-4">
            <ButtonIcon size="small">
              <Icon type="ArrowDown" />
              Small
            </ButtonIcon>
            <ButtonIcon size="medium">
              <Icon type="ArrowDown" />
              Medium
            </ButtonIcon>
            <ButtonIcon size="large">
              <Icon type="ArrowDown" />
              Large
            </ButtonIcon>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Children</h1>
          <div className="flex flex-row gap-x-4">
            <ButtonIcon>
              <Icon type="ArrowDown" />
              Text With Icon Left
            </ButtonIcon>
            <ButtonIcon>
              Text With Icon Right
              <Icon type="ArrowDown" />
            </ButtonIcon>
            <ButtonIcon>
              <Icon type="ArrowDown" />
            </ButtonIcon>
          </div>
        </div>
        <div>
          <h1 className="text-xl font-bold my-3">Code</h1>
          <SyntaxHighlighter language="vbscript-html" style={docco}>
            {codeString}
          </SyntaxHighlighter>
          <table className="w-full mt-6 table-fixed">
            <thead>
              <tr className="text-left border">
                <th className="p-2 text-sm">Name</th>
                <th className="p-2 text-sm">Decription</th>
                <th className="p-2 text-sm">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="text-xs border">
                <td className="py-3 px-2">Variant</td>
                <td className="py-3 px-2 flex flex-row items-center flex-wrap gap-x-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;Primary&quot;</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;Secondary&quot;</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;Tertiary&quot;</span>
                </td>
                <td className="py-3 px-2"><span className="rounded bg-gray-100 px-2 py-0.5">Primary</span></td>
              </tr>
              <tr className="text-xs border">
                <td className="py-3 px-2">Size</td>
                <td className="py-3 px-2 flex flex-row items-center flex-wrap gap-x-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;Small&quot;</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;Medium&quot;</span>
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;Large&quot;</span>
                </td>
                <td className="py-3 px-2"><span className="rounded bg-gray-100 px-2 py-0.5">Medium</span></td>
              </tr>
              <tr className="text-xs border">
                <td className="py-3 px-2">Children</td>
                <td className="py-3 px-2 flex flex-row items-center flex-wrap gap-x-2">
                  <span className="rounded bg-gray-100 px-2 py-0.5">&quot;ReactNode&quot;</span>
                </td>
                <td className="py-3 px-2"><span className="rounded bg-gray-100 px-2 py-0.5">-</span></td>
              </tr>
            </tbody>
          </table>
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
            <div className="w-1/2 flex-1 flex justify-center items-center relative">
              <WrapZoom>
                <ButtonIcon size={playground.size} variant={playground.variant}>
                  <Icon type="ArrowDown" />
                  {playground.text || 'Button'}
                </ButtonIcon>
              </WrapZoom>
            </div>
          </div>
        </div>
      </div>
    </Template>
  );
};

export default DocumentationPage;
