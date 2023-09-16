import * as RadioGroup from '@radix-ui/react-radio-group'

export const RadioGroupDemo = () => (
  <form>
    <RadioGroup.Root defaultValue="default" aria-label="View density">
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item value="default" id="r1">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <label htmlFor="r1">Default</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item value="comfortable" id="r2">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <label htmlFor="r2">Comfortable</label>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <RadioGroup.Item value="compact" id="r3">
          <RadioGroup.Indicator />
        </RadioGroup.Item>
        <label htmlFor="r3">Compact</label>
      </div>
    </RadioGroup.Root>
  </form>
)
