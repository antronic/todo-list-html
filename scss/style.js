import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  charset: 'UTF-8',
  '*': {
    'outline': '0 !important'
  },
  'html': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fd3454'
  },
  'body': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'padding': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }],
    'backgroundColor': '#fd3454'
  },
  '#todo-list-app': {
    'marginTop': [{ 'unit': 'em', 'value': 2 }]
  },
  '#todo-list-app todo-list-card': {
    'padding': [{ 'unit': 'em', 'value': 2.5 }, { 'unit': 'em', 'value': 2 }, { 'unit': 'em', 'value': 1.5 }, { 'unit': 'em', 'value': 2 }],
    'backgroundColor': '#ffffff',
    'borderRadius': '8px'
  },
  '#todo-list-app todo-list-card heading': {
    'padding': [{ 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0 }, { 'unit': 'em', 'value': 0.25 }, { 'unit': 'em', 'value': 0 }],
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }]
  },
  '#todo-list-app todo-list-card todo-lists': {
    'maxHeight': [{ 'unit': 'px', 'value': 400 }],
    'overflowX': 'scroll',
    'marginTop': [{ 'unit': 'em', 'value': 1 }],
    'boxShadow': [{ 'unit': 'string', 'value': 'inset' }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': -10 }, { 'unit': 'px', 'value': 10 }, { 'unit': 'px', 'value': -10 }, { 'unit': 'string', 'value': 'rgba(25, 25, 25, 0.25)' }]
  },
  '#todo-list-app todo-list-card todo-lists todo-list': {
    'fontSize': [{ 'unit': 'em', 'value': 1.25 }],
    'color': '#575757',
    'borderBottom': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#ccc' }],
    'padding': [{ 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }, { 'unit': 'em', 'value': 0.5 }]
  },
  '#todo-list-app todo-list-card todo-lists todo-list p': {
    'margin': [{ 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }, { 'unit': 'px', 'value': 0 }]
  },
  '#todo-list-app todo-list-card todo-lists todo-list input[type="checkbox"]': {
    'marginTop': [{ 'unit': 'em', 'value': 0.25 }],
    'WebkitAppearance': 'none',
    'border': [{ 'unit': 'px', 'value': 1 }, { 'unit': 'string', 'value': 'solid' }, { 'unit': 'string', 'value': '#575757' }],
    'borderRadius': '50%',
    'width': [{ 'unit': 'em', 'value': 1 }],
    'height': [{ 'unit': 'em', 'value': 1 }]
  },
  '#todo-list-app todo-list-card todo-lists todo-listdone': {
    'color': '#ddd'
  },
  '#todo-list-app todo-list-card todo-lists todo-listdone input[type="checkbox"]': {
    'border': [{ 'unit': 'string', 'value': 'none' }]
  },
  '#todo-list-app todo-list-card todo-lists todo-listdone input[type="checkbox"]:after': {
    'position': 'absolute',
    'height': [{ 'unit': 'px', 'value': 10 }],
    'width': [{ 'unit': 'px', 'value': 10 }],
    'color': '#ddd',
    'content': ''✔''
  },
  '#todo-list-app todo-list-card plus': {
    'marginTop': [{ 'unit': 'em', 'value': 1 }]
  },
  '#todo-list-app todo-list-card plus btn-plus': {
    'WebkitAppearance': 'none',
    'border': [{ 'unit': 'string', 'value': 'none' }],
    'backgroundColor': 'transparent',
    'borderRadius': '8px'
  },
  '#todo-list-app todo-list-card plus btn-plus:hover': {
    'backgroundColor': '#fd3454',
    'color': '#fff',
    'paddingLeft': [{ 'unit': 'em', 'value': 1.5 }],
    'paddingRight': [{ 'unit': 'em', 'value': 1.5 }]
  }
});
