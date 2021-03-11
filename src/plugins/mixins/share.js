export default {
  methods: {
    share (
      url
    ) {
      if (navigator.share) {
        navigator.share({
          title: 'Issu',
          text: 'Criei um Issu e gostaria que você participasse!',
          url: url
        })
      }
    }
  }
}
