import { css } from "styled-system/css";
import { MdMenu, MdClose } from "react-icons/md";
import { Drawer } from "../ui/drawer";
import { Button } from "../ui/button";
import { IconButton } from "../ui/icon-button";
import ColorModeHandler from "../client/color-mode-handler";
import Menu from "../client/menu";

function MyDrawer(props: Drawer.RootProps) {
  return (
    <Drawer.Root {...props}>
      <Drawer.Trigger asChild>
        <IconButton
          className={css({
            position: "fixed",
            bottom: 4,
            right: 4,
            zIndex: "banner",
          })}
          size="xl"
        >
          <MdMenu />
        </IconButton>
      </Drawer.Trigger>
      <Drawer.Backdrop />
      <Drawer.Positioner>
        <Drawer.Content>
          <Drawer.Header>
            <Drawer.Title>Drawer</Drawer.Title>
            <Drawer.CloseTrigger asChild position="absolute" top="3" right="4">
              <IconButton variant="ghost">
                <MdClose />
              </IconButton>
            </Drawer.CloseTrigger>
          </Drawer.Header>
          <Drawer.Body>
            <Menu />
          </Drawer.Body>
          <Drawer.Footer gap="3">
            <ColorModeHandler />
            <Drawer.CloseTrigger asChild>
              <Button variant="outline">Close</Button>
            </Drawer.CloseTrigger>
          </Drawer.Footer>
        </Drawer.Content>
      </Drawer.Positioner>
    </Drawer.Root>
  );
}

export default MyDrawer;
