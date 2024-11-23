import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Label } from "./ui/label"
import { SelectProps } from "node_modules/@radix-ui/react-select/dist"

type Props = SelectProps & { // React.InputHTMLAttributes<HTMLSelectElement> &
    id?: string,
    value?: string,
    items: string[],
    placeholder?: string,
    label?: string,
    className?: string,
    onIdxChange: (idx: number) => void,
}

function SelectComponent({id, items, placeholder, label, className, onIdxChange, ...rest}: Props) {

    return (
        <span id={id} className={`w-full ${className}`}>
            <Label htmlFor="select-field">
                {label}
            </Label>
            <Select
                {...rest}
                onValueChange={(idx) => onIdxChange(parseInt(idx))}
            >
                <SelectTrigger className="w-full mt-1" name="select-field">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {
                        items.map((v, i) => (
                            <SelectItem
                                value={i.toString()}
                                key={i}
                            >{v}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </span>
    )
  }
  
  export default SelectComponent
  