import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

type Props = {
    value?: string,
    className?: string
    placeholder?: string,
    label?: string,
    onChange: (value: string) => void,
}

function TextAreaComponent({className, placeholder, label, onChange}: Props) {

    return (
        <span className={className}>
            <Label htmlFor="text-field">
                {label}
            </Label>
            <Textarea
                id="text-field"
                onChange={(e) => onChange(e.target.value)}
                placeholder={placeholder}
                className="mt-1"
            />
        </span>
    )
  }
  
  export default TextAreaComponent
  