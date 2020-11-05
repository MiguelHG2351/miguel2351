import globalStyles from 'styles/global'

export default function Layout(props) {
  return <>
    {props.children}
    <style jsx global>
      {globalStyles}
    </style>
  </>
}