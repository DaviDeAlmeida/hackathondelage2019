import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SideBar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <Menu.Item as='a'>
        <input type="image" src="../src/" alt="" />
      </Menu.Item>
      <Menu.Item as='a'>
        Abertura x Resolução
      </Menu.Item>
      <Menu.Item as='a'>
        Produtividade por operador
      </Menu.Item>
      <Menu.Item as='a'>
        Tempo médio de resolução
      </Menu.Item>
      <Menu.Item as='a'>
        Demanda diária
      </Menu.Item>
    </Sidebar>

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default SideBar