const useCode = () => {
  const codeString: string = `
  // Button Variant
  <div className="flex flex-row gap-x-4">
    <ButtonIcon>
      <Icon type="ArrowDown" />
      Arrow Left
    </ButtonIcon>
    <ButtonIcon>
      Arrow Right
      <Icon type="ArrowDown" />
    </ButtonIcon>
  </div>

  // Button Size
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

  // Button Children
  <div className="flex flex-row gap-x-4">
    <ButtonIcon>
      <Icon type="ArrowDown" />
      Text With Icon Left
    </ButtonIcon>
    <ButtonIcon>
      Text With Icon Right
      <Icon type="ArrowDown" />
    </ButtonIcon>

    // Only Icon or all element html
    <ButtonIcon>
      <Icon type="ArrowDown" />
    </ButtonIcon>
  </div>
  `;

  return {
    codeString,
  };
};

export default useCode;
