# Supabase Database Setup Guide

This guide will walk you through setting up your PostgreSQL database on Supabase for the Judoka Network project.

## 🎯 What You'll Do

1. Create a Supabase account (free tier is perfect for development)
2. Create a new project for development
3. Get your database connection string
4. Configure your local environment
5. Run database migrations
6. Verify everything works

---

## 📝 Step-by-Step Instructions

### Step 1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click **"Start your project"** or **"Sign Up"**
3. Sign up with GitHub, Google, or email
4. Verify your email if required

### Step 2: Create Development Project

1. Once logged in, click **"New Project"**
2. **Organization**: Select or create one (e.g., "Personal" or "Judoka Network")
3. **Project Settings**:
   - **Name**: `judoka-network-dev`
   - **Database Password**: Generate a strong password (SAVE THIS!)
   - **Region**: Choose closest to you (e.g., "West US (Oregon)")
   - **Pricing Plan**: Free (perfect for development)
4. Click **"Create new project"**
5. Wait 2-3 minutes for provisioning

### Step 3: Get Your Connection String

1. In your project dashboard, go to:
   ```
   Settings (⚙️) → Database → Connection String
   ```

2. Under **"Connection string"**, select **"URI"** tab

3. You'll see something like:
   ```
   postgresql://postgres:[YOUR-PASSWORD]@db.abcdefghijklmnop.supabase.co:5432/postgres
   ```

4. **Important**: Replace `[YOUR-PASSWORD]` with the password you created in Step 2

5. **Copy the complete URL** (with your actual password)

### Step 4: Configure Local Environment

1. In your project, navigate to the backend folder:
   ```bash
   cd apps/backend
   ```

2. Create a `.env` file from the example:
   ```bash
   # Windows PowerShell
   Copy-Item .env.example .env

   # Or manually create apps/backend/.env
   ```

3. Open `apps/backend/.env` in your editor

4. Replace the `DATABASE_URL` line with your Supabase connection string:
   ```env
   DATABASE_URL="postgresql://postgres:your_actual_password@db.abcdefghijklmnop.supabase.co:5432/postgres"
   ```

5. Save the file

### Step 5: Run Database Migrations

Now we'll create all the database tables from our Prisma schema.

1. Make sure you're in the backend folder:
   ```bash
   cd apps/backend
   ```

2. Run the migration:
   ```bash
   npx prisma migrate dev --name init-schema
   ```

   This will:
   - ✅ Connect to your Supabase database
   - ✅ Create all 6 tables (User, Academy, BeltProgression, Verification, Achievement, UserAchievement)
   - ✅ Create enums (BeltColor, VerificationStatus)
   - ✅ Set up all relationships and constraints
   - ✅ Generate the Prisma Client

3. You should see output like:
   ```
   Applying migration `20260723_init-schema`
   The following migration(s) have been created and applied from new schema changes:
   migrations/
     └─ 20260723_init-schema/
       └─ migration.sql
   
   Your database is now in sync with your schema.
   
   ✔ Generated Prisma Client
   ```

### Step 6: Verify Setup

1. **Check in Supabase Dashboard**:
   - Go to **Table Editor** in Supabase
   - You should see 6 tables: `users`, `academies`, `belt_progressions`, `verifications`, `achievements`, `user_achievements`

2. **Open Prisma Studio** (optional - visual database browser):
   ```bash
   npx prisma studio
   ```
   - Opens at `http://localhost:5555`
   - You can view and edit data visually

3. **Test the connection** in your NestJS app:
   ```bash
   # From backend folder
   npm run dev
   ```
   - If it starts without errors, database connection is working! 🎉

---

## 🔐 Security Notes

### ⚠️ NEVER commit your `.env` file!

The `.env` file contains your database password and should **never** be pushed to GitHub.

**Verify it's ignored:**
```bash
# Check .gitignore
cat ../../.gitignore | grep .env
```

You should see:
```
.env
.env.local
```

### Best Practices

1. **Development vs Production**:
   - Use `judoka-network-dev` for development
   - Create `judoka-network-prod` later for production
   - Never use production database for testing

2. **Password Management**:
   - Store your Supabase password in a password manager
   - Never share it or commit it to Git
   - Rotate it if compromised

3. **Connection Pooling** (for production later):
   - Use Supabase connection pooler for production
   - Available in: Database → Connection Pooling

---

## 🆘 Troubleshooting

### Error: "Can't reach database server"

**Solution:**
- Check your internet connection
- Verify DATABASE_URL is correct
- Ensure no extra spaces in `.env`
- Try connecting to Supabase dashboard to verify project is running

### Error: "Invalid connection string"

**Solution:**
- Format should be: `postgresql://postgres:PASSWORD@db.PROJECT-REF.supabase.co:5432/postgres`
- No spaces in the URL
- Password must be URL-encoded if it contains special characters

### Error: "Migration failed"

**Solution:**
- Check if schema.prisma has syntax errors
- Try: `npx prisma format` first
- Delete `prisma/migrations` folder and try again

### Tables not showing in Supabase

**Solution:**
- Refresh the Table Editor page
- Check you're in the correct project
- Run `npx prisma db push` to force sync

---

## ✅ Success Checklist

- [ ] Supabase account created
- [ ] Project `judoka-network-dev` created
- [ ] Database password saved securely
- [ ] Connection string copied
- [ ] `apps/backend/.env` file created
- [ ] `DATABASE_URL` configured
- [ ] Migration ran successfully
- [ ] 6 tables visible in Supabase Table Editor
- [ ] Prisma Client generated
- [ ] Backend starts without errors

---

## 🚀 Next Steps

Once your database is set up:

1. ✅ **Task 0.3 Complete!** - Database is ready
2. 📝 **Commit your changes**:
   ```bash
   git add apps/backend/.env.example
   git add SUPABASE_SETUP.md
   git commit -m "chore(database): add Supabase setup guide"
   ```
3. 🔄 **Move to Task 0.4** - Testing infrastructure setup

---

## 📚 Additional Resources

- [Supabase Documentation](https://supabase.com/docs)
- [Prisma with Supabase](https://www.prisma.io/docs/guides/database/supabase)
- [PostgreSQL Connection Strings](https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING)

---

**Need help?** Open an issue or check the Supabase Discord community.
