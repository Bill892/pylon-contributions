iscord.on('MESSAGE_CREATE', async (message) => {
  if (message.content.toLowerCase().includes('/dorito')) {
    await message.reply(
      'https://test.rauf.workers.dev/?&author=the+dorito&color=F56208&image=https://cdn.discordapp.com/attachments/665616042340384808/769345128027521024/3TRgHXc.gif'
    );
  }
});
