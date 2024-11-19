import { Input, InputProps } from "./ui/input"
import { Label } from "./ui/label"

type Props = InputProps & {
    //value?: string | number,
    className?: string
    placeholder?: string,
    label?: string,
    readOnly?: boolean,
    onIdxChange: (value: string) => void,
}

function InputComponent({className, placeholder, label, readOnly, onIdxChange, ...rest}: Props) {

    return (
        <span className={`w-full ${className}`}>
            <Label htmlFor="input-field">
                {label}
            </Label>
            <Input
                {...rest}
                name="input-field"
                onChange={(e) => onIdxChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full ${readOnly && 'bg-gray-200'}`}
                readOnly={readOnly}
            />
        </span>
    )
  }
  
  export default InputComponent
  