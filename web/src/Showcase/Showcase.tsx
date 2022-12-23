export default function Showcase() {
  return (
    <div>
      <Button
        component="a"
        target="_blank"
        rel="noopener noreferrer"
        href="https://twitter.com/mantinedev"
        leftIcon={<IconBrandTwitter size={18} />}
        styles={(theme) => ({
          root: {
            backgroundColor: "#00acee",
            border: 0,
            height: 42,
            paddingLeft: 20,
            paddingRight: 20,

            "&:hover": {
              backgroundColor: theme.fn.darken("#00acee", 0.05),
            },
          },

          leftIcon: {
            marginRight: 15,
          },
        })}
      >
        Follow on Twitter
      </Button>
    </div>
  );
}
