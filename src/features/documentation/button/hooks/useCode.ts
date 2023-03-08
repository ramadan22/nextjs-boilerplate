const useCode = () => {
  const codeString: string = `
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

  return {
    codeString,
  };
};

export default useCode;
