if ("registerProperty" in CSS) {
  try {
    window.CSS.registerProperty({
      name: "--primary-color",
      syntax: "<color>",
      inherits: true,
      initialValue: "#d87211",
    })

    window.CSS.registerProperty({
      name: "--secondary-color",
      syntax: "<color>",
      inherits: true,
      initialValue: "#e91e63",
    })

    window.CSS.registerProperty({
      name: "--tertiary-color",
      syntax: "<color>",
      inherits: true,
      initialValue: "#9c27b0",
    })
  } catch (error) {
    console.log(error)
  }
} else {
  console.log("register property is not available")
}
