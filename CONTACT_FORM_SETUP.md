# Contact Form Setup Guide

Your contact form is now functional! Here's what you need to do to make it work:

## 1. Set up Resend (Email Service)

1. Go to [Resend.com](https://resend.com) and create a free account
2. Get your API key from the dashboard
3. Create a `.env.local` file in your project root with:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```

## 2. Configure Email Settings

In `src/app/api/contact/route.ts`, update the `from` email address:

```typescript
from: 'Portfolio Contact <noreply@yourdomain.com>', // Update this
```

**Options:**
- Use a verified domain you own (recommended)
- Use Resend's sandbox domain for testing: `onboarding@resend.dev`

## 3. Test the Form

1. Start your development server: `npm run dev`
2. Go to your contact page
3. Fill out and submit the form
4. Check your email (ramibenothmen15@gmail.com) for the message

## Features Added

✅ **Real email sending** - Messages actually reach your inbox  
✅ **Form validation** - Client and server-side validation  
✅ **Loading states** - Visual feedback during submission  
✅ **Success/error messages** - Clear user feedback  
✅ **Responsive design** - Works on all devices  
✅ **Security** - Input sanitization and validation  

## Troubleshooting

- **"Failed to send email"**: Check your Resend API key and domain verification
- **"Network error"**: Check your internet connection
- **Form not submitting**: Make sure all required fields are filled

## Production Deployment

When deploying to production:
1. Set the `RESEND_API_KEY` environment variable in your hosting platform
2. Verify your domain with Resend for production use
3. Update the `from` email address to use your verified domain

The form will now actually send you real messages when people fill it out! 