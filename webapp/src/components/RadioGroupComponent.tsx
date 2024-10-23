import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

type Props = {
    items: string[],
    placeholder?: string,
    label?: string,
    onChange: (idx: number) => void,
}

function RadioGroupComponent({items, label, onChange}: Props) {

    return (
        <span>
            <Label htmlFor="radio-group">
                {label}
            </Label>

            <RadioGroup
                id="radio-group"
                defaultValue={items[0]}
                className="mt-2 grid-cols-3 gap-y-4"
                onValueChange={(idx) => onChange(parseInt(idx))}
            >
                {
                    items.map((v, i) => (
                        <div className="flex items-center space-x-2" key={v}>
                            <RadioGroupItem value={i.toString()} id={`option-${i}`} />
                            <Label className="font-normal" htmlFor={`option-${i}`}>{v}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </span>
    )
  }
  
  export default RadioGroupComponent
  