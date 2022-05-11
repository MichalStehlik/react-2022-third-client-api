export const Item = ({content}) => {
    console.log(content);
    return (
        <tr>
            <td>{content.zeme}</td>
            <td>{content.mena}</td>
            <td>{content.mnozstvi}</td>
            <td>{content.kod}</td>
            <td>{content.kurz}</td>
        </tr>
    );
}

export default Item;