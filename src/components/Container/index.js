import React from 'react';
import styles from './Container.css';
import Helmet from 'react-helmet';
import { Layout, Menu, Spin, Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'dva/router';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Container extends React.Component {
  state = {
    collapsed: false,
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    return (
      <Layout>
        <Sider
          collapsible
          onCollapse={this.toggle}
          collapsed={this.state.collapsed}
        >
          <div className={styles.logo}><Link to="/">L{!this.state.collapsed && <span>ogo</span>}</Link></div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>

              <SubMenu key="sub1" title={<span><Icon type="user" /><span>subnav 1</span></span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" /><span>subnav 2</span></span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" /><span>subnav 3</span></span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
          </Menu>
        </Sider>
        <Layout className={styles.layout}>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className={styles.trigger}
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            Content
          </Content>

          <Footer className={styles.footer}>
            <p>Created by <a target="_blank" rel="noopener noreferrer" href="https://sisir.me">Sisir K. Adhikari</a></p>
          </Footer>
        </Layout>
      </Layout>
    );
  }
}


/*class Container extends React.Component {
  
  render() {
    const styles = {...{ background: '#fff', padding: 24, minHeight: 280 }, ...this.props.styles}
    
    return (
      <Layout className={style.layout}>
        
          <Sider collapsible width={200} theme="dark">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout>
        <Helmet>
          <title>{this.props.title}</title>
        </Helmet>
        <Header>
          <div className={style.logo}><h1><Link to="/">LOGO</Link></h1></div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
          <Content style={{ padding: '0 50px' }}>
            <Spin size="large" spinning={this.props.loading}>
              <div style={styles}>
                {this.props.children}
              </div>
            </Spin>
          </Content>

          <Footer className={style.footer}>
            <p>Created by <a target="_blank" rel="noopener noreferrer" href="https://sisir.me">Sisir K. Adhikari</a></p>
          </Footer>
        </Layout>
      </Layout>
    )
  }
}*/

Container.propTypes = {
  styles: PropTypes.object,
  loading: PropTypes.bool
};

Container.defaultProps = {
  styles: {},
  loading: false
}

export default Container;
