let handler = async (m, { conn, text }) => {
   if (!text) return conn.reply(m.chat, '🍬 Por favor, ingresa la nueva biografia que deseas ponerme.', m, rcanal)
     try {
                await conn.updateProfileStatus(text).catch(_ => _)
                conn.reply(m.chat, `🍬 Info Cambiada Con Exito...`, m)
} catch {
       throw 'Well, Error Sis...'
     }
}
handler.help = ['setstatus <teks>']
handler.tags = ['owner']
handler.command = ['setstatus', 'setbio']
handler.rowner = true

export default handler