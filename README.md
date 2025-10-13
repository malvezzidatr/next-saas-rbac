# Next.js SaaS + RBAD

This project contains all the necessary boilerplate to setup a multi-tenant SaaS with Next.js including authentication and RBAC authorization.

##Features

### Authentication

- [ ] It should be able to authenticate using e-mail & password;
- [ ] It should be able to authenticate using Github account;
- [ ] It should be able to recover password using e-mail;
- [x] It should be able to create an account (e-mail, name and password);

### Organizations

- [ ] It should be able to create a new organization;
- [ ] It should be able to to get organizations to which the user belongs;
- [ ] It should be able to update an organization;
- [ ] It should be able to shutdown an organization;
- [ ] It should be able to transfer organization ownership;

### Invites

- [ ] It should be able to invite a new member (e-mail, role);
- [ ] It should be able to accept an invite;
- [ ] It should be able to revoke a pending invite;

### Member

- [ ] It should be able to get organization members;
- [ ] It should be able to update a member role;

### Projects

- [ ] It should be able to get projects within a organization;
- [ ] It should be able to create a new project (name, url, description);
- [ ] It should be able to update a project (name, url, description);
- [ ] It should be able to delete a project;

### Billing

- [ ] It should be able to get billig details for organization ($20 per project / $10 per member excluding billing role);

### Roles

- Administrator
- Member
- Billing

### Permissions table

| Ação / Recurso                  | ADMIN | MEMBER | BILLING |
| ------------------------------- | :---: | :----: | :-----: |
| **User**                        |       |        |         |
| ➤ get                           |  ✅   |   ✅   |   ❌    |
| ➤ manage                        |  ✅   |   ❌   |   ❌    |
| ➤ update                        |  ✅   |   ❌   |   ❌    |
| ➤ delete                        |  ✅   |   ❌   |   ❌    |
| **Project**                     |       |        |         |
| ➤ create                        |  ✅   |   ✅   |   ❌    |
| ➤ get                           |  ✅   |   ✅   |   ❌    |
| ➤ update (se owner)             |  ✅   |   ✅   |   ❌    |
| ➤ delete (se owner)             |  ✅   |   ✅   |   ❌    |
| ➤ manage                        |  ✅   |   ❌   |   ❌    |
| **Organization**                |       |        |         |
| ➤ manage                        |  ✅   |   ❌   |   ❌    |
| ➤ update (se owner)             |  ✅   |   ❌   |   ❌    |
| ➤ transfer_ownership (se owner) |  ✅   |   ❌   |   ❌    |
| ➤ delete                        |  ✅   |   ❌   |   ❌    |
| **Invite**                      |       |        |         |
| ➤ manage                        |  ✅   |   ❌   |   ❌    |
| ➤ create                        |  ✅   |   ❌   |   ❌    |
| ➤ get                           |  ✅   |   ❌   |   ❌    |
| ➤ delete                        |  ✅   |   ❌   |   ❌    |
| **Billing**                     |       |        |         |
| ➤ manage                        |  ✅   |   ❌   |   ✅    |
| ➤ get                           |  ✅   |   ❌   |   ✅    |
| ➤ export                        |  ✅   |   ❌   |   ✅    |
| **ALL (geral)**                 |       |        |         |
| ➤ manage all                    |  ✅   |   ❌   |   ❌    |
