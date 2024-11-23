import { Input, InputProps } from "./ui/input"
import { Label } from "./ui/label"

type Props = InputProps & {
    //value?: string | number,
    className?: string
    inputClassName?: string
    placeholder?: string,
    label?: string,
    readOnly?: boolean,
    onTxtChange: (value: string) => void,
}

function InputComponent({className, inputClassName, placeholder, label, readOnly, onTxtChange, ...rest}: Props) {

    return (
        <span className={`w-full ${className}`}>
            <Label htmlFor="input-field">
                {label}
            </Label>
            <Input
                {...rest}
                name="input-field"
                onChange={(e) => onTxtChange(e.target.value)}
                placeholder={placeholder}
                className={`w-full ${readOnly && 'bg-gray-200'} ${inputClassName}`}
                readOnly={readOnly}
            />
        </span>
    )
  }
  
  export default InputComponent
  