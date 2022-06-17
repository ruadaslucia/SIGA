import './mainLeft.scss';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

function MainLeft() {
  return (
    <div className="mainLeft">
      <h2 className="mainTitle">mainLeft</h2>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem icon="">Menu</MenuItem>
          <SubMenu title="Cursos" icon="">
            <MenuItem>2021/2022</MenuItem>
            <MenuItem>2022/2023</MenuItem>
          </SubMenu>
        </Menu>
      </ProSidebar>
      ;
    </div>
  );
}

export default MainLeft;
