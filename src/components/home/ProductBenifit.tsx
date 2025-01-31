import BoltIcon from "@/icons/BoltIcon";
import RocketIcon from "@/icons/RocketIcon";
import ScalingIcon from "@/icons/ScalingIcon";
import ShieldIcon from "@/icons/ShieldIcon";

const ProductBenifit = () => {
  return (
    <section className="w-full mt-[120px]">
      <div className="grid gap-6 md:gap-12 lg:grid-cols-2  items-start">
        <img
          src="/images/unlock.jpeg"
          width="550"
          height="550"
          alt="Product Benefits"
          className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full"
        />
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-600">
              Unlock The Power Of New Treadmill
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Discover the incredible benefits of our innovative product and
              transform the way you work.
            </p>
          </div>
          <ul className="grid gap-4">
            <li className="flex items-start gap-4">
              <div className="bg-primaryMat text-white rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                <RocketIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-600">Increased Productivity</h3>
                <p className="text-muted-foreground">
                  Our product streamlines your workflow, helping you accomplish
                  more workout in less time.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primaryMat text-white rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                <BoltIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-600">Improved Efficiency</h3>
                <p className="text-muted-foreground">
                  Automate repetitive tasks and focus on what matters most with
                  our intelligent features.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primaryMat text-white rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                <ShieldIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-600">Enhanced Security</h3>
                <p className="text-muted-foreground">
                  Rest easy knowing your data is protected with our robust
                  security measures.
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <div className="bg-primaryMat text-white rounded-md flex items-center justify-center aspect-square w-10 md:w-12">
                <ScalingIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-green-600">Scalable Solution</h3>
                <p className="text-muted-foreground">
                  Our product grows with your business, adapting to your
                  changing needs.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default ProductBenifit;
