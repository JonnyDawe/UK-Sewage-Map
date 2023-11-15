import { CaretDownIcon } from "@radix-ui/react-icons";
import { Button, DropdownMenu } from "@radix-ui/themes";

interface SelectOption {
    value: number | string;
    label: string;
}

interface InlineSelectProps {
    options: SelectOption[];
    value: string | number;
    onChange: (selectedValue: string | number) => void;
}

const DEFAULTOPTION = { value: undefined, label: "" };

function findOptionFromValue(options: SelectOption[], value: string | number) {
    return options.find((option) => option.value === value) ?? DEFAULTOPTION;
}

export function InLineSelect({ options, value, onChange }: InlineSelectProps) {
    const handleOptionChange = (newValue: string | number) => {
        onChange(newValue);
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger>
                <Button variant="ghost" size={"2"}>
                    {findOptionFromValue(options, value).label}
                    <CaretDownIcon />
                </Button>
            </DropdownMenu.Trigger>
            <DropdownMenu.Content variant="soft">
                {options
                    .filter((option) => option.value !== value)
                    .map((option) => (
                        <DropdownMenu.Item
                            key={option.value}
                            id={option.value.toString()}
                            onClick={() => handleOptionChange(option.value)}
                        >
                            {option.label}
                        </DropdownMenu.Item>
                    ))}
            </DropdownMenu.Content>
        </DropdownMenu.Root>
    );
}
