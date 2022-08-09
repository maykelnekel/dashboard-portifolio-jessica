import { ISelect } from "../../Interfaces"
import { Option, Select } from "./style"


export const SelectComponent = ({selectId,selectName,selectList}:ISelect):JSX.Element => {
    return(
        <Select name={selectName} id={selectId}>
            {
                selectList.map(item=>(
                    <Option value={item.categoria}>{item.categoria}</Option>
                ))
            }
        </Select>
    )
}