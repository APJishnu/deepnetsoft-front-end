import MenuView from "@/modules/menu/views/menu-view";
import ModuleHeader from "@/themes/components/module-header/module-header";

export default function page() {
  return (
    <>
    <ModuleHeader
        title="MENU"
        description="Please take a look at our menu featuring food, drinks, and brunch. If you'd like to place an order, use the 'Order Online' button located below the menu."
      />
      <MenuView/>
    </>
    

  )
    
  
}
