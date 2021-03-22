import globalStyles from 'components/Layout/global'

export default function Layout(props) {
  return <>
      <main className="container">
        {props.children}
      </main>
    <style jsx global>
      {globalStyles}
    </style>
  </>
}