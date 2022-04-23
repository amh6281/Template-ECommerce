import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">최근 거래내역</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">안명회</span>
          </td>
          <td className="widgetLgDate">2022-04-19</td>
          <td className="widgetLgAmount">122,000</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">안명회</span>
          </td>
          <td className="widgetLgDate">2022-04-19</td>
          <td className="widgetLgAmount">122,000</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://user-images.githubusercontent.com/83646986/156501089-92b5bf79-321b-4868-a8e9-314fa164ff4e.png"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">안명회</span>
          </td>
          <td className="widgetLgDate">2022-04-19</td>
          <td className="widgetLgAmount">122,000</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
      </table>
    </div>
  );
}
