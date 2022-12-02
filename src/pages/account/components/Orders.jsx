import Paging from "../../../components/Paging";
import Order from "./Order";
export default function Orders() {
  return (
    <>
      <Order />
      <div className="col-12">
        <Paging />
      </div>
    </>
  );
}
